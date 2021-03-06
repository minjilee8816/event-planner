import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: '',
      index : null
    }
  }

  eventDescriptionPage(e) {
    var selectedTitle = e.target.title; 
    var events = this.props.events; 
    for ( var i = 0; i < events.length; i++) {
      if( events[i].title === selectedTitle ) {
        this.setState({
          selectedEvent: events[i],
          index: i
        },  this.sendSelectedEventToTopComponent )
      }
    }
   this.sendSelectedEventToTopComponent(); 
  }

  sendSelectedEventToTopComponent() {
    this.props.description(this.state.selectedEvent, this.state.index);
  }

  render () {
    return (
      <div className ="allEvents">
        {this.props.events === null ? <h2 className="emptyEvents">There are no events</h2> : 
          this.props.events.map((event, index) =>  {
            return (
              <div key={index} className="eachEvent">
                <div className ="eventHandler">
                    <div className="eventImages">
                    { event.image !== null ?  <img src={event.image.medium.url}/> : null }
                    { event.image === null && this.props.eventType === "Sports" ?  <img src="https://healthhabits.files.wordpress.com/2008/07/howard.jpg"/> : null }
                    { event.image === null && this.props.eventType === "PerformingArts" ? <img src="https://s-media-cache-ak0.pinimg.com/originals/ac/02/f2/ac02f21214e95bcd917ade4c37a01a13.jpg"/> : null }
                    { event.image === null && this.props.eventType === "Concerts" ? <img src="http://s4.evcdn.com/images/block250/I0-001/024/825/663-1.jpeg_/mj-live-michael-jackson-tribute-concer-63.jpeg"/> : null  }
                    </div>
                    <div className="eventSmallDes">
                      { event.title !== null ? <a id="resultTitle" onClick={this.eventDescriptionPage.bind(this)} href="#descriptionPage" className="eventTitle" title={event.title}>{event.title.slice(0,18)}</a> : null } <br/> 
                      <a id="resultTitle" onClick={this.eventDescriptionPage.bind(this)} href="#descriptionPage" className="eventTitle" title={event.title}>{event.title.slice(18,38)}</a><br/>
                      <a id="resultTitle" onClick={this.eventDescriptionPage.bind(this)} href="#descriptionPage" className="eventTitle" title={event.title}>{event.title.slice(38,58)}</a><br/>
                      <span className="eventVenueName">{event.venue_name.slice(0,26)}</span> <br/>
                      <span className="eventVenueName">{event.venue_name.slice(26)}</span> <br/>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default Events;
