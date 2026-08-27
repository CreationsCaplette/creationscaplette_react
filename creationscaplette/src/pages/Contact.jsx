import classes from './Contact.module.css';

import davidImg from '../assets/david.jpg'

function ContactPage() {
    return (
        <div className={classes.pageshell}>
            <header className={classes.header}>
                <div className={classes.headertop}>
                    <h1>Contact</h1>
                </div>
            </header>

            <main className={classes.content}>
                <div className={classes.mugshot}>
                    <img src={davidImg} alt="David Caplette" />
                </div>
            </main>
        </div>
    )
}

export default ContactPage;