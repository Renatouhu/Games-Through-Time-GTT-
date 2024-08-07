import { Instagram, Linkedin, Mail, PhoneCall, Twitter } from "lucide-react"
import { section, list, icon, title, division } from "./About.css"

export function About() {

    return (
        <section className={section}>
            <div>
                <h3 className={title}>Social Media</h3>
                <ul className={list}>
                    <li>
                        <Instagram className={icon} />
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <Twitter className={icon} />
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <Linkedin className={icon} />
                        <a href="#">Linkedin</a>
                    </li>
                </ul>
            </div>

            <div className={division} />

            <div>
                <h3 className={title}>Support</h3>
                <ul className={list}>
                    <li>
                        <Mail className={icon}/>
                        <p>example@gmail.com</p>
                    </li>
                    <li>
                        <PhoneCall className={icon}/>
                        <p>(23) 3947-3098</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}