import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
// APi call with axios
async function registerUser(ev){
    ev.preventDefault();
    try {
        await axios.post('/register', {
            name,
            email,
            password,
          });
          alert('registerd');
    } catch (error) {
        alert('404');
    }
   
}
    return (
            <div style={styles.container}>
                <form style={styles.form} onSubmit={registerUser}>
                    <h2 style={styles.heading}>Create an Airbnb Account</h2>
                    <div style={styles.formGroup}>
                        <input style={styles.input} 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="John Doe" 
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        required />
                    </div>
                    <div style={styles.formGroup}>
                        <input style={styles.input} 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your@gmai.com" 
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        required />
                    </div>
                    <div style={styles.formGroup}>
                        <input style={styles.input} 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                        required />
                    </div>
                    <div style={styles.formGroup}>Have registerd then <Link to={'/login'}>Login</Link>
                        <button style={styles.button} type="submit">Register</button>
                    </div>
                     <div className="text-center py-2 text-gray-500">
                         Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        );
    }
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#fff',
            margin: 0,
            display: 'flex',
            flexDirection: 'column', // Adjusted to a column layout
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        },
        heading: {
            color: '#333',
            marginBottom: '20px', // Added margin at the bottom to separate heading from the form
        },
        form: {
            backgroundColor: '#fff',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: '300px',
            textAlign: 'center',
        },
        formGroup: {
            marginBottom: '10px', // Adjusted margin to reduce the distance between form groups
        },
        input: {
            width: '100%',
            padding: '5px', // Adjusted padding for the input fields
            boxSizing: 'border-box',
            border: '1px solid #ccc',
            borderRadius: '25px', // Adjusted to make the input slightly rounded
        },
        button: {
            width: '100%', // Adjusted to match the width of the input
            padding: '5px', // Adjusted padding for the button
            boxSizing: 'border-box',
            backgroundColor: '#4CAF50', // Changed color for registration button
            color: '#fff',
            border: 'none',
            borderRadius: '25px', // Adjusted to make the button slightly rounded
            cursor: 'pointer',
        },
        loginLink: {
            marginTop: '20px', // Added margin to separate the login link from the form
        },
    };

