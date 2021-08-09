import './dashboard.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LiveStream from '../livestream/livestream';



function Dashboard() {
    const [state, setState] = useState(null);
    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://api.twitch.tv/helix/streams',
            headers: {
                'Client-ID': '3ehn5lv2fve542c99yzki872q4cl9a',
                'Authorization': 'Bearer f23nx6uzafad96pd18rzcswcklauiw'
            }
        }

        axios(config)
            .then((res) => {
                console.log("fetched");
                setState(res.data.data);
                console.log(res.data.data);
            }
            )
            .catch((e) => {
                console.log(e);
            });
    
    });
    function show(){
        const list=document.getElementById('list');
        if(list.style.top=="120px"){
            list.style.top="430px"
        }else{
            list.style.top="120px";
        }
    }


return <div className="dashboard">
    
    <div className="parties">
        <button className="createParty" onClick={show}> +  Create a Party</button>

    </div>
    <div className="stream">
        <iframe
            src="https://player.twitch.tv/?channel=sw8j&parent=localhost"
            height="400"
            width="600"
         >   
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
    <div id="list" className="list" onClick={show}>
        <div >
            <h1 className="bar">Top Streams</h1>
        </div >
        <div className="showcase">
        {state!=null?state.map((x)=>{ return <LiveStream name={x.user_name} game={x.game_name} src={x.thumbnail_url} />}):null}
        </div>
    </div>
</div>
}


export default Dashboard;