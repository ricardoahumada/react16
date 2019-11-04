import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class ModalAlertTimeout extends Component {

	timeoutModal = React.createRef();

	handleShow=(e)=>{
		console.log('Modal:',$(this.timeoutModal.current));
		$(this.timeoutModal.current).modal({show:true});
		// $(this.refs.timeoutModal).modal({show:true});
	}

	render() {
		return (
			<div>
				<h1>Trabajando con refs</h1>
				<button type="button" className="btn btn-primary" data-toggle="modal" onClick={this.handleShow}>
					Launch modal
				</button>

				<div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={this.timeoutModal}>
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								...
      						</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalAlertTimeout;