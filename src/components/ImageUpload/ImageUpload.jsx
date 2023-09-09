import React, { useEffect, useRef, useState } from "react";
import "./ImageUpload.css";
import PreviewIcon from "./PreviewIcon";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickedRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
      localStorage.setItem("image" , fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickedRef.current.click();
  };

  const pickedHandler = (event) => {
    let PickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      PickedFile = event.target.files[0];
      setFile(PickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onChange(PickedFile);
  };

  return (
    <div className="form-control">
      <input
        ref={filePickedRef}
        type="file"
        id={props.id}
        style={{ display: "none" }}
        accept=".jpg,.png,.jepg"
        onChange={pickedHandler}
      />
      <div className={`image-upload .center`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="preview" />}

          {!previewUrl && (
            <div className="show">
              {props.ImageView ? (
                <div className="item">
                  <img
                    src={props.ImageView}
                    alt={props.ImageView}
                    className="image__view"
                  />
                </div>
              ) : (
                <PreviewIcon />
              )}
              <p>
                {" "}
                <button type="button" onClick={pickImageHandler}>
                  Click to replace
                </button>
                {"  "}
                {"  "}or drag and drop{"  "}
              </p>
              {!props.ImageView && (
                <p className="svg">SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;