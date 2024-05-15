"use client";

import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Header from "../../components/Header/page";
import { useRouter } from "next/navigation";
import Editpbut from "../../components/Editpbut";
import CompleteProfile from "../../components/CompleteProfile";
import "./global.css";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
// import Router from "next/router";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Leader = ({fullName }: any) => (
  <div>
    {/*<!-- Header -->*/}
    <div>
      {/* <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}> */}
      {/*<!-- Mask -->*/}
      <span className="mask bg-gradient-default opacity-8"></span>
      {/*<!-- Header container -->*/}
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          <div className="col-lg-7 col-md-10">
            <br />
            <br />
            <h1 className="display-2 text-white ">
              Hello   {(fullName  ? fullName : "User")}
            </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PageContent = (props: any) => {
  const { user, check, email, events, loading, dbUser ,image,fullName} = props;

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <Image
                        alt="."
                        src={image ? image: "/images/def.png"}
                        className="rounded-circle"
                        width={150}
                        height={150}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between"></div>
              </div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                   {(fullName  ? fullName : "User")}
                    <span className="font-weight-light"></span>
                  </h3>
                  <h6 className="heading-small text-muted mb-4">
                    Registered Events
                  </h6>
                     <div className="pl-lg-4">
                    <div className="form-group focused">
                      {events && events.length > 0 ? (
                        <ul>
                          {events.map((event: string, index: number) => (
                            <li className="event" key={index}>
                              {event}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div>
                          <p>No registered events</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">My account</h3>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 text-md-right text-center mt-3 mt-md-0">
                  {email &&
                    (check == 1 ? (
                      <Editpbut email={email} user={dbUser} />
                    ) : (
                      <CompleteProfile email={email} user={dbUser} />
                    ))}
                </div>
              </div>
              <div className="card-body">
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Phone
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="Phone"
                            value={dbUser && dbUser.phone}

                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            value={dbUser && dbUser.email}
                          />
                        </div>
                      </div>
                    </div>
                
                    
                      <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Name
                          </label>
                          <input
                            id="input-address"
                            className="form-control form-control-alternative"
                            placeholder=" Full Name"
                            value={dbUser && dbUser?.Name}
                            type="text"
                          />
                       
                      </div>
                    </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  {/*<!-- Address -->*/}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <input
                            id="input-address"
                            className="form-control form-control-alternative"
                            placeholder=" Address"
                            value={dbUser && dbUser?.address}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            College Name
                          </label>
                          <input
                            type="text"
                            id="input-city"
                            className="form-control form-control-alternative"
                            placeholder="City"
                            value={dbUser && dbUser?.city}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            id="input-country"
                            className="form-control form-control-alternative"
                            placeholder="State"
                            value={dbUser && dbUser?.state}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Year of study
                          </label>
                          <input
                            type="number"
                            id="input-postal-code"
                            className="form-control form-control-alternative"
                            placeholder="Year of Study"
                            value={dbUser && dbUser?.yearOfStudy}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />

                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



interface ProfileProps {
  user: any; 
  Events: any[]; 
  cp: number;
  error: boolean; 
}
export default function Profile({user,Events,cp=1,error}:ProfileProps) {
  // const [data, setData] = useState({});
  const router=useRouter();
  const {data:session, status} =  useSession({required: true});

  const [completeProfile, setCompleteProfile] = useState(0);
  const [dbUser, setDbUser] = useState({});
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
const [events,setEvents]=useState({})


  useEffect(() => {
    setCompleteProfile(cp);
    setDbUser(user);
    setEvents(Events)
    setSessionLoaded(true);
  }, [cp, user]);

  useEffect(() => {
    if (sessionLoaded) {
      setLoading(false);
    }
  }, [sessionLoaded, error]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (cp == 2) {
        toast.warning("Please complete your profile", {
          position: "top-right",
          autoClose: 5000, // Close toast after 5 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      

      }
    }, 30000);
    // window.location.reload();

    return () => clearInterval(interval);
  }, [cp]);

  if (!sessionLoaded || loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }


  return (
    <>
     
      <Header show={false} />
      <div>
        <div className="main-content">
           
           <Leader user={dbUser}   fullName={session?.user?.name}/>
          <PageContent
            image={session?.user?.image}
            user={dbUser}
            check={completeProfile}
            email={session?.user?.email}
            events={events}
            loading={loading}
            dbUser={dbUser}
          fullName={session?.user?.name}
          /> 
        </div>
      </div>
    </>
  );
}
