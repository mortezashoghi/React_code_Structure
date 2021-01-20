import React from 'react';
import { connect,dispatch } from 'react-redux'
import {getUserlistRequest} from '../../redux'
const Content = () => {
    return (         
<main role="main">

<div className="jumbotron">
  <div className="container">
    <h1 className="display-5" >لیست کاربران فعال</h1>
    <p>نخواستی که بفهمی ........ </p>
    <p><a className="btn btn-primary btn-lg" href="#" role="button">دریافت لیست</a></p>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-md-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
    <div className="col-md-4">
      <h2>Heading</h2>
      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
      <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
    <div className="col-md-4">
      <h2>users list </h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
  </div>
</div> 

</main>
 );
mapDispatchToProps=dispatch=>{
  return{
    getUserlistRequest:()=>dispatch()
  }
}

}
 
export default connect(mapDispatchToProps)(Content);        
