// FUNCTION COMPONENTS EXERCISE

// 1a
function Ghostbusters() {
    return `Who you gonna call?`;
}

// 1b
ReactDOM.render(
    // <Ghostbusters/>,
    // 2b  
    //   < Tagline/>,
    // 3b
    // <Janine/>,
    // 4b
    // <MassHysteria/>,
    // 5
    // <GhostbustersLogo />,
    // 6d
    // <ToolsTalent />,
    // 7b
    <GhostbustersAll/>,
    document.getElementById(`root`)
);

// 2a
function Tagline() {
    return <h1>"We're ready to believe you."</h1>;
}

// 3a
function Janine() {
    return (<div>
        <h2>`I've quit better jobs than this.` </h2>
        <h2>`Ghostbusters, whaddya want?`</h2>
    </div>
    );
}

// 4a (auto complete the elements div>ul>li*3^p) instead of 3 uls should be ul with 3 li inside.
function MassHysteria() {
    return (<div>
        <ul>"Fire and brimstone coming down from the skies! Rivers and seas boiling!"</ul>
        <ul>"Forty years of darkness! Earthquakes! Volcanoes!"</ul>
        <ul>"The dead rising from the grave!"</ul>
        <p>"Human sacrifice! Dogs and cats, living together! Mass hysteria!"</p>
    </div>
    );
}

// 5a 
 function GhostbustersLogo (){
   return ( <div>
 <img src = {"https://cdn.pixabay.com/photo/2016/07/13/18/41/ghostbusters-1515155_1280.jpg"} alt = "ghostbusters logo"/>;
    </div>
    );
} 

// 6a
function ToolsTalent() {
    // 6b
    const w = `We`;
    // 6c
    return (<div>
        <h1>`{w} had the tools.`</h1>
        <h3>`{w} had the talent.`</h3>
    </div>
    );
}

// 7a (Commas not needed here but are needed in render)
function GhostbustersAll() {
    return (<div>
        <Ghostbusters />,
        <Tagline />,
        <Janine />,
        <MassHysteria />,
        <GhostbustersLogo />,
        <ToolsTalent />,
    </div>
    );
}

// 8a
function DiceRoll (){
    // 8b the +1 should be outside the parentheses (what I did)
    // let die1 = Math.floor(Math.random () *6 + 1);
    let die1 = Math.floor(Math.random () *6) + 1;
    // 8c
    let die2 = Math.floor(Math.random () *6)+ 1;
    
        // // 8d how I started
        //    if (die1 ===1 && die2 ===1){
        //  return ( 
        //  <div> <h1>SNAKE EYES</h1>
        //     else {
        //         <h1></h1>
        //    }</div>

        return(
            <div>
                <h1>{(die1 ===1 && die2 ===1) ? `SNAKE EYES` : `${die1} & ${die2}`}</h1>
            </div>
        );  
    }
  