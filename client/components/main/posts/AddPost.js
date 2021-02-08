import axios from "axios";
import React, { useState, useEffect } from "react";
import { base_url } from "../../../config";
import {useDispatch} from "react-redux";

export default () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [filesToSend, setFilesToSend] = useState([]);
  const dispatch = useDispatch();

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const highlight = () => {
    document.getElementById("dropArea").classList.add("highlight");
  };

  const unhighlight = () => {
    document.getElementById("dropArea").classList.remove("highlight");
  };

  const previewFile = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      let img = document.createElement("img");
      img.src = reader.result;
      document.getElementById("gallery").appendChild(img);
    };
  };

  const upload = async () => {
    const formData = new FormData();
    const obj = {
      message,
    };

    const blob = new Blob([JSON.stringify(obj)], {
      type: "application/json",
    });

    for (const file of filesToSend) {
      formData.append("file", file);
    }

    formData.append("message", blob);

    try {
      const res = await axios.post(`${base_url}/posts`, formData);
      console.log('data: ',res.data);
      dispatch({
        type: "ADD_POST",
        data: res.data
      });
    } catch (err) {
      console.log(err.message);
    }

    setFilesToSend([]);
    setMessage("");
    document.getElementById("gallery").innerHTML = "";
  };

  const checkFile = (file) => {
    if (file.type.split("/")[0] != "image") {
      throw new Error("Invalid file type");
    }
    console.log(file.type.split("/")[0]);
    if (file.size > 1000000) {
      throw new Error("File too big");
    }
  };

  const handleFiles = (files) => {
    try {
      [...files].forEach(checkFile);
      setFilesToSend(files);
      [...files].forEach(previewFile);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDrop = (e) => {
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
  };

  useEffect(() => {
    const dropArea = document.getElementById("dropArea");

    if (dropArea) {
      dropArea.addEventListener("drop", handleDrop, false);

      ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(eventName, preventDefaults, false);
      });

      ["dragenter", "dragover"].forEach((eventName) => {
        dropArea.addEventListener(eventName, highlight, false);
      });

      ["dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(eventName, unhighlight, false);
      });

      return () => {
        const d = document.getElementById("dropArea");

        if(d) {
          d
          .removeEventListener("drop", handleDrop, false)

          [("dragenter", "dragover", "dragleave", "drop")].forEach(
            (eventName) => {
              d.removeEventListener(eventName, preventDefaults, false);
            }
          );

          ["dragenter", "dragover"].forEach((eventName) => {
            d.removeEventListener(eventName, highlight, false);
          });

          ["dragleave", "drop"].forEach((eventName) => {
            d.removeEventListener(eventName, unhighlight, false);
          });
        }
        
      };;
    }
  }, []);

  return (
    <div>
      {error ? <div className="error">{error}</div> : ""}
      <div className="add-post-container">
        <div id="dropArea">
          <form className="my-form">
            <p>
              Upload multiple files with the file dialog or by dragging and
              dropping images here
            </p>
            <input
              type="file"
              id="fileElem"
              multiple
              accept="image/*"
              onChange={({ target }) => handleFiles(target.files)}
            />
            <label className="button" htmlFor="fileElem">
              Select some files
            </label>
          </form>
          <div id="gallery"></div>
        </div>
        <textarea
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        ></textarea>
        <button className="add-post" onClick={upload}>
          Add Post
        </button>
      </div>
    </div>
  );
};
