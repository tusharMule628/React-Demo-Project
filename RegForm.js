import { Component } from "react";
import "./RegForm.css"

class RegForm extends Component{
    constructor(){
        super();
        this.state={
            userName:"",
            userAge:0,
            email:"",
            uPassword:"",
            gender:"",
            DOB:"",
            courses:""
        }
    }
    submit(){
        alert("Form Submited Successfully!!")
    }
    handleSubmit(){
     console.log("User Name:"+this.state.userName,"User Age:"+this.state.userAge,"User E-Mail:"+this.state.email,
     "User Password:"+this.state.uPassword,"User Gender:"+this.state.gender,"User DOB:"+this.state.DOB,"Completed Courses:"+this.state.courses,)
    }
    handleChange(data){
        const input=data.target;
        this.setState({
            [input.name]:input.value})

    }
    render(){
        return(
            <div >
                <form id="Fbody" onSubmit={this.handleSubmit(this)}>
                <label class="labels" for="uName">User Name</label>
                <input type="text" name="userName" id="uName"onChange={this.handleChange.bind(this)}></input>
                <br></br><br></br>
                <label class="labels" for="uAge">User Age</label>
                <input type="number" name="userAge" id="uAge" onChange={this.handleChange.bind(this)}></input>
                <br></br><br></br>
                <label class="labels" for="email">User E-Mail</label>
                <input type="text" name="email" id="email" onChange={this.handleChange.bind(this)}></input>
                <br></br><br></br>
                <label class="labels" for="pswd">User Password</label>
                <input type="password" name="uPassword" id="pswd" onChange={this.handleChange.bind(this)}></input>
                <br></br><br></br>
                <label class="labels" for="Gen">Gender</label>
                <input type="radio" name="gender" class="Gen" value="female"  onChange={this.handleChange.bind(this)}/> Male
                <input type="radio" name="gender" class="Gen" value="female"  onChange={this.handleChange.bind(this)}/> Female
                <br></br><br></br>
                <label class="labels" for="dob">DOB</label>
                <input type="date" name="DOB" id="dob" onChange={this.handleChange.bind(this)}></input>
                <br></br><br></br>
                <label class="labels" For="Course">Complete Course:-</label>
                 <input type="checkbox" name="courses" className="Course" onChange={this.handleChange.bind(this)} value="Full Stack Java" /> Full Stack Java
                 <input type="checkbox" name="courses" className="Course" onChange={this.handleChange.bind(this)} value="Full Stack Python" /> Full Stack Python
                 <input type="checkbox" name="courses" className="Course" onChange={this.handleChange.bind(this)} value="Front End" /> Front End
                 <input type="checkbox" name="courses" className="Course" onChange={this.handleChange.bind(this)} value="Back End" /> Back End
                <br></br><br></br>

                <input type="submit" Value="Submit" onClick={this.submit}></input>
            </form>

            <ul>
                <li>User Name:{this.state.userName}</li>
                <li>User Age:{this.state.userAge}</li>
                <li>User E-Mail:{this.state.email}</li>
                <li>User Password:{this.state.uPassword}</li>
                <li>User Gender:{this.state.gender}</li>
                <li>User DOB:{this.state.DOB}</li>
                <li>User Courses:{this.state.courses}</li>
            </ul>
            </div>
          
        )
    }
}
export default RegForm;