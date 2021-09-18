# oss upload遇到的坑

## 上传图片，记录

* 从阿里oss图片链接获取mp4的截屏地址，通过canvas获取图片，或者直接通过video截屏获取图片
使用new File，上传oss


* new File阿里不支持
* 使用blob代替new File
* blob需要转成buffer之后，使用put上传成功

```js
// 1. 获取阿里视频mp4截图
var intercept = function (filePath) {
    // let fileurl = URL.createObjectURL(file)

    const resultArr = [];
    const video = document.createElement("video");
    video.addEventListener("loadedmetadata", function (e2) {
      // 获取宽、高、时间
      const { videoWidth, videoHeight, duration } = video;
      // 截取视频5张图片10%， 15%， 25%， 40%， 60%，  85%
      for (let i = 1; i < 6; i++) {
        const randomtime = parseInt(duration) * 10 * 15 * i;
        resultArr.push(
          `${filePath}?x-oss-process=video/snapshot,t_${randomtime},f_jpg,w_${videoWidth},h_${videoHeight},m_fast`
        );
      }
      // 获取图片之后创建file
      createFile(resultArr);
    });
    // ?x-oss-process=video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast

    video.src = filePath;
  };


  function createFile (dataurlArr) {
    const dataurlArrLen = dataurlArr.length;
    const promiseObj = [];
    for (let i = 0; i < dataurlArrLen; i++) {
      // 分别对图片进行处理成base64的
      promiseObj.push(getBase64(dataurlArr[i]));
    }
    Promise.all(promiseObj).then((res) => {
      // 等图片处理
      toUploadFile(res);
    });
  };
  // 获取截图路径base64
  function getBase64(urlPath) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute("crossOrigin", "");

      img.src = `${urlPath}&v=${Math.random()}`;

      img.onload = function () {
        const canvas = document.createElement("canvas"); // 创建canvas元素
        const { width, height } = img;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height); // 将图片绘制到canvas中，转为base64
        const dataURL = canvas.toDataURL("image/png");
        const nowTime = +new Date();
        // 创建file
        const newFile = dataURLtoFile(
          dataURL,
          `img-video-${nowTime}.png`
        );
        resolve(newFile);
      };
    });
  };
  function dataURLtoFile(dataurl, filename) {
    // 将base64转换为文件
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    // 此次处理blob
    let blob = null;
    blob = new Blob([u8arr.buffer], { type: mime });
    blob.lastModifiedDate = new Date();
    blob.name = filename;
    // blob转arrayBuffer
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    return blob;
  };
  function toUploadFile(fileArr, callback) {
    
    const csrftoken = Cookies.get("csrfToken");
    const url = `/upload/image.json?xyz=${csrftoken}`;
     if ($(".video-img").length) {
      $(".video-img").remove();
    }
    // 防止重新上传错误
    $(".video-play").append('<div class="video-img hidden"></div>');
    $(".video-img").ossupload(
      {
        channel: `video${+new Date()}`,
        url,
        dataType: "html",
        uploadBlob: fileArr,
        limit: "5M",
        limitMsg: "图片大小超过5M",
        limitNum: 5,
        loadingScroll: true,
        done(e) {
          // window.hideErrorInfo("errMsgs");
        },
      },
      (result) => {
        console.log('this is 结果')
      }
    );
    $(".video-img").click();
  };
  
});

```

## ossupload
```js
// polyfill async转为es5
const uploadBlob = function ($this, options, callback) {
    let uploadFileArr = [];
    // 如果多个图片上传，传file数组
    const uploadFileData = options.uploadBlob;
    if (!uploadFileData) return;
    if (uploadFileData instanceof Array) {
      uploadFileArr = uploadFileData;
    } else {
      uploadFileArr.push(uploadFileData);
    }
    const filesLen = uploadFileArr.length;
    for (let i = 0; i < filesLen; i++) {
      const targetFile = uploadFileArr[i];
      // 设置为buffer
      const reader = new FileReader();
      reader.readAsArrayBuffer(targetFile);
      reader.onload = function (event) {
        // arrayBuffer转Buffer
        // eslint-disable-next-line no-undef
        const buffer = new OSS.Buffer(event.target.result);
        // eslint-disable-next-line no-inner-declarations
        ossupload.client.put("文件名"), buffer).then((result) => {
          if (callback && typeof callback === "function") {
            if (result && result.name) {
              result.data = `${result.name}`;
              callback(JSON.stringify(result));
            } else {
            }
          }
        });
      };
    }
  };

  // 视频进度条
  async function resumeUpload() {
      try {
        const result = await ossupload.client.multipartUpload('name名称', file, {
          // 分片大小默认1 MB，不能小于100 KB
          partSize: 1048576,
          // 并行上传分片个数，默认5
          parallel: 5,
          async progress(p, checkpoint) {
            // 如果上传过程点击modal弹窗
            if ($("#video").length) {
              options.progress(p, checkpoint);
            } else {
              e.target.value = "";
            }
          },
        });
        if (callback && typeof callback === "function") {
          if (result && result.name) {
            result.data = `${result.name}`;
            result.fileType = fileType;
            callback(JSON.stringify(result), $target);
          } else {
          }
        }
      } catch (err) {
        // console.log(err);
      }
    }
    resumeUpload();

// https://github.com/dankogai/js-base64
 window.atob = function (str) {
      return Base64.decode(str);
    };
```


