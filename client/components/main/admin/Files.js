import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../../config";

export default () => {
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(false);

  useEffect(() => {
    axios.get(`${base_url}/admin/file`).then(({ data }) => {
      if (data.data < 25) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      setFiles(data.data);
    });
  }, []);

  const deleteImage = async (id) => {
    await axios.delete(`${base_url}/admin/file?id=${id}`);
    setFiles((f) => f.filter((x) => x !== id));
  };

  const loadMore = async () => {
    axios.get(`${base_url}/admin/file?page=${page}`).then(({ data }) => {
      if (data.data < 25) {
        setMore(true);
      } else {
        setPage((p) => p + 1);
      }
      console.log(data.data);
      setFiles((f) => [...f, ...data.data]);
    });
  };

  return (
    <div className="admin-files">
      {files.length > 0 ? (
        <>
          {files.map((x) => (
            <div key={x} className="admin-file">
              <img src={`${base_url}/posts/img/${x}`} />
              <button onClick={() => deleteImage(x)}>Delete image</button>
            </div>
          ))}
          {!more && (
            <div className="load-more" onClick={loadMore}>
              Load more
            </div>
          )}
        </>
      ) : (
        <h2>No files</h2>
      )}
    </div>
  );
};
