import React from 'react'
import 

function HeadMenu() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light"
		style={{height: "70px;"}}>
		<ul className="navbar-nav">
			<li className="nav-item"><a className="nav-link" data-widget="pushmenu"
				 role="button"><i className="fas fa-bars"></i></a></li>
		</ul>

		<ul className="navbar-nav ml-auto">
			<li className="nav-item"><a className="nav-link" style={{cursor: "pointer;"}}
				> <span
					className="custom-icon-message"></span> <span
					className="badge badge-danger navbar-badge">N</span>
			</a></li>
			<div className="ml-2"></div>
			<li>
				
					<button className="btn btn-block btn-info btn-flat mt-1"
						style={{backgroundcolor: "#79aaa4;" ,border: "none;" ,width: "100px;", height: "40px;", borderRadius: "5px;"}}>
						로그아웃</button>
			
			</li>
			<li>
				<div className="row ml-4 mr-4">학번: </div>
				<div className="row ml-4 mr-4">이름: </div>
			</li>
			<li>
				<div className="image" style={{cursor: "pointer;"}}
					>
					<img
						className="img-circle img-md" alt="User Image"
						style={{width: "45px;" ,height: "45px;", objectFit: "cover;" }}/>
				</div>
			</li>
		</ul>
	</nav>
  )
}

export default HeadMenu