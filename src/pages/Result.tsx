import React from 'react';
import { useLocation } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';


interface IProps {
    ansCount: number,
    count: number,
}

const Result: React.FC = () => {
    const location = useLocation();
    const result = location.state as IProps;
    // const deg = (a: number, b: number) => {
    //     return (360 * a) / (a + b);
    // }
    return (
        <div data-testid="result">
     <h2>Result Page</h2>
            <h3 style={{color: '#E38627', padding: '5px', margin:"0"}}>Correct is {result?.ansCount}</h3>
            <h3 style={{color: '#C13C37', padding: '5px', margin:"0"}}>Wrong is {result?.count - result?.ansCount}</h3>
            {/* <div
            style={{
                width: "400px",
                height: "400px",
                backgroundImage: `conic-gradient(
                    green 0deg ${deg(result?.ansCount, result?.count - result?.ansCount)}deg,
                    red ${deg(result?.ansCount, result?.count - result?.ansCount)}deg 360deg
                )`,
                borderRadius: "50%",
                margin: "0 auto",
            }}
            /> */}

            <PieChart
                data={[
                    { title: 'Wrong', value: (result?.count - result?.ansCount), color: '#C13C37' },
                    { title: 'Correct', value: result?.ansCount, color: '#E38627'  },
                ]}
                // viewBoxSize={[100, 50]}
                style={{ height: '400px' }}
                label={({ dataEntry }) => dataEntry.title}
                // labelStyle={{defaultLabelStyle                }}
                labelStyle={(index) => ({
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                  })}
            />;
        </div>
    );
};

export default Result;