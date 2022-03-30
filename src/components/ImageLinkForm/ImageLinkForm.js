import React from "react";
import "./ImageLinkForm.css";
import { GoInfo } from "react-icons/go";
import { AiFillEye } from 'react-icons/ai';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      {/* <p className="f3 fw6">
        {"This app will detect faces in pictures. Try it out!"}
      </p> */}
      <div>
        <div className="center">
          <div className="center form pa4 br3 shadow-2">
            <input
              className="br3 pa2 w-70 center"
              type="text"
              onChange={onInputChange}
              placeholder="Image URL"
            />
            {/* <button
              className="w-25 grow f4 link ph3 pv2 dib white bg-light-purple"
              onClick={onSubmit}
            >
              Detect
            </button> */}

            <LoadingButton
              color="secondary"
              onClick={onSubmit}
              // loading={loading}
              loadingPosition="start"
              startIcon={<AiFillEye />}
              variant="contained"
            >
              Detect
            </LoadingButton>
            {/* <div className="info" data-tooltip='hello bro'>
              <GoInfo className="info-icon grow"/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
