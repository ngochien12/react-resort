import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quae."
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quae."
            },
            {
                icon:<FaShuttleVan />,
                title:"Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quae."
            },
            {
                icon:<FaBeer />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quae."
            }
        ]
    }
    render() {
        return (
            <section className="service">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} 
                    className="services">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                })}
                </div>
            </section>
        );
    }
}
