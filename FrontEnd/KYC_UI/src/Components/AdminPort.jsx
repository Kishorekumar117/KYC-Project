import React, { useState } from 'react';
import UserNav from './UserNav';
import AllUploads from './AllUploads';
import AllUsers from './AllUsers';

function AdminPort() {

  const [activeButton, setActiveButton] = useState('v-pills-home-tab');

  const changeColorButton = (buttonId) => {
    // Update the active button state
    setActiveButton(buttonId);
  };



  return (
    /* i need to add scroll bar */
    <div style={{ overflowY: 'scroll', height: '100vh' }}>

      <UserNav />

      <div className="container-fluid pt-1">
        <div className="row" >

          <div className="col-md-3" style={{ backgroundColor: 'white', borderRight: '1px solid rgba(145, 144, 144, 0.2)', boxShadow: '5px 0px 10px -9px rgba(145, 144, 144, 1)' }}>
            <div className="nav flex-column nav-pills m-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button
                className={`nav-link ${activeButton === 'v-pills-home-tab' ? 'active' : ''}`}
                style={{ backgroundColor: activeButton === 'v-pills-home-tab' ? 'rgb(145, 144, 144,0.2) ' : 'white', color: 'black' }}
                onClick={() => changeColorButton('v-pills-home-tab')}
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected={activeButton === 'v-pills-home-tab'}
              >
                View All Users
              </button>
              <button
                className={`nav-link ${activeButton === 'v-pills-profile-tab' ? 'active' : ''}`}
                style={{ backgroundColor: activeButton === 'v-pills-profile-tab' ? 'rgb(145, 144, 144,0.2)' : 'white', color: 'black' }}
                onClick={() => changeColorButton('v-pills-profile-tab')}
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected={activeButton === 'v-pills-profile-tab'}
              >
                User Uploads
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><AllUsers /></div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><AllUploads /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AdminPort;
