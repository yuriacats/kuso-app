import React, {useEffect,useState} from "react";
import {Line} from "react-chartjs-2";
import axios from "axios";

const Graph = () => {
    const labels = [...Array(1000).keys()]
    const [getdata,setData] =useState(null)

    useEffect(() =>{
        let api_url = "https://7bwuqu1180.execute-api.ap-northeast-1.amazonaws.com/default/BayesianApp"
        axios.get(api_url).then((res) => {
            setData(res.data);
        }).catch((err) => {
            setData(null)
        })
    },[0]);
    if (!getdata) return <>Loading...</>;
    const graphData ={
        labels: labels,
        datasets: [
            {
                label: "A　model",
                data:getdata.first,
                borderColor: "rgb(75, 192, 192)"
            },
            {
                label: "B model",
                data: getdata.second,
                borderColor: "rgb(75,100,192)"
            },
        ],
    };
    console.log(getdata)
    return(<>
        <div className="App" >
            <Line
                height={300}
                width={300}
                data={graphData}
                id="chart-key"
            />
        </div>
        </> )
}


export default Graph