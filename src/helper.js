import Holder from 'holderjs';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';
import $ from "jquery";


let appName = 'app Name';
let fontName = "Helvetica";
let fontWeight = "normal";
let backgroundColor = "rgba(241,112,19,1)";
let foregroundColor = "#00AEEF";

// download tbn clicked

/* Custom helper methods */

function convertImgToBase64URL(url, key, callback, outputFormat) {
  let img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function() {
    let canvas = document.createElement('CANVAS'),
      ctx = canvas.getContext('2d'),
      dataURL;
    canvas.height = this.height;
    canvas.width = this.width;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL, key);
    canvas = null;
  };
  img.src = url;
}

function createArchive(images) {
  // Use jszip
  let zip = new JSZip();
  let img = zip.folder("images");
  for (let i = 0; i < images.length; i++) {
    let base64Data = images[i].data.replace(/^data:image\/png;base64,/, "")
    img.file(images[i].key + ".png", base64Data, {
      base64: true
    });
  }
  zip.generateAsync({
    type: "blob"
  }).then(function(content) {
    saveAs(content, "images.zip");
  });
}


let downloadButtonClicked = function (availableSizes) {
  let convertedImages = [];
  let counter = 0;
  let selectedCount = 0;

  for (let key in availableSizes) {
    let sizes = availableSizes[key];

    if (sizes.selected === true) {
      selectedCount++;

      let dataSource = "holder.js/" + sizes.height + "x" + sizes.width + "?theme=simple&outline=yes&text=" + (appName.length > 0 ? appName : "App name");
      let image = $("<img>").attr({
        "data-src": dataSource
      })

      Holder.run({
        themes: {
          "simple": {
            bg: backgroundColor,
            fg: foregroundColor,
            font: fontName,
            fontweight: fontWeight,
            size: sizes.size
          }
        },
        images: image[0]
      });
      debugger;
      convertImgToBase64URL(image[0].src, key, function(base64Img, key) {
        convertedImages.push({
          key: key,
          data: base64Img
        });
        counter++;
        if (counter === selectedCount) {
          createArchive(convertedImages);
        }
      });
    }
  }
}

export function download( availableSizes, color, name, font_name) {
  debugger
  if(color) {
    backgroundColor = color;
  }
  if(appName) {
    appName = name;
  }
  if(fontName) {
    fontName = font_name;
  }
  downloadButtonClicked( availableSizes)
}