import './dashboard.css';

function Dashboard() {
   
    return <div className="dashboard">

        <div className="parties">
            <button className="createParty"> +  Create a Party</button>

        </div>
        <div className="stream">
            <iframe
                src="https://player.twitch.tv/?channel=swagg&parent=localhost"
                height="400"
                width="600"
                allowfullscreen="true">
            </iframe>
        </div>
        <div className="chat">
            <iframe id="twitch-chat-embed"
                src="https://www.twitch.tv/embed/swagg/chat?parent=dev.twitch.tv"
                height="500"
                width="350">
            </iframe>
        </div>
        <div id="twitch-embed"></div>
    </div>
}


export default Dashboard;