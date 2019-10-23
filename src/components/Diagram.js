//import { render } from 'react-dom';
//import './index.css';
import React, { Component } from 'react';
import { DiagramComponent, NodeConstraints, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
//import { SampleBase } from './sample-base';
//import { Point } from "@syncfusion/ej2-diagrams/src/diagram/primitives/point";
//import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
//Initializes the nodes for the diagram


let diagramInstance;
let node;

class Diagrams extends Component {
  constructor(props){
  super(props);
  this.state={
    sdlc: [],
    connections: [],
  }
}
componentDidMount(){
  console.log(this.props);
 // let sdlc= this.props.milestone;
  let sdlc = [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
    { id: "6", text: "6" }
];
//arranges the nodes in a circular path
//let count = 5;
//let space = 10;
//let radius = (count * 100 + space * count) / (2 * Math.PI);
//console.log(radius);

sdlc[0].offsetX = 300;
sdlc[0].offsetY = 300;
//let delta = 360 / 5;
//let angle = 90;
let value =500;
for (let i = 1; i < 6; i++) {
    //let offset = Point.transform({ x: 300, y: 300 }, angle, radius);
    sdlc[i].offsetX = value;
    sdlc[i].offsetY = 300;
   // angle = 90;
    value +=150; 
}
//Initializes the connector for the diagram
let connections = [];
for (let i = 0; i < 5; i++) {
  if(i=== 5){
    //connections.push({ sourceID: sdlc[i].id, targetID: sdlc[i].id });
  }else{
   connections.push({ sourceID: sdlc[i].id, targetID: sdlc[(i % 5)+1].id }); 
  }
}
this.setState({connections , sdlc})
  var locked= "lock";
  changed(locked)
}
   
    render() {
      const { sdlc, connections }= this.state;
        return (<div className="row control-pane">
        <div className="col-md-12 control-section">
          <div className="content-wrapper" style={{ width: "100%" }}>
            <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"100%"} height={"645px"} nodes={sdlc} connectors={connections} getNodeDefaults={(node) => {
            let obj = {};
            obj.width = 50;
            obj.height = 50;
            obj.shape = { shape: "Ellipse" };
            obj.style = { fill: "#37909A", strokeColor: "#024249" };
            obj.annotations = [
                {
                    content: '',
                    margin: { left: 10, right: 10 },
                    style: {
                        color: "white",
                        fill: "none",
                        strokeColor: "none",
                        bold: true
                    }
                }
            ];
            return obj;
        }} getConnectorDefaults={(obj) => {
            obj.targetDecorator.style = {
                fill: "#024249",
                strokeColor: "#024249"
            };
            return { style: { strokeColor: "#024249", strokeWidth: 2 } };
        }} snapSettings={{ constraints: SnapConstraints.None }}>
              
            </DiagramComponent>
          </div>
        </div> 
      </div>);
    }
}
//Set customStyle for Node.
//Enable or disable the Constraints for Node.
function changed(args) {
   // let element = document.getElementById("aspectRatio");
    for (let i = 0; i < diagramInstance.nodes.length; i++) {
        node = diagramInstance.nodes[i];

        if (args === "lock") {
            if (args.checked) {
                node.constraints &= ~(NodeConstraints.Resize |
                    NodeConstraints.Rotate |
                    NodeConstraints.Drag);
                node.constraints |= NodeConstraints.ReadOnly;
            }
            else {
              node.constraints &= ~(NodeConstraints.Resize |
                    NodeConstraints.Rotate |
                    NodeConstraints.Drag);
                node.constraints |= NodeConstraints.ReadOnly;
                node.constraints |= NodeConstraints.Default & ~NodeConstraints.ReadOnly;
            }
        // }
        // else {
        //     if (element.checked) {
        //        node.constraints &= ~(NodeConstraints.Resize |
        //             NodeConstraints.Rotate |
        //             NodeConstraints.Drag);
        //         node.constraints |= NodeConstraints.ReadOnly;
        //     }
        //     else {
        //       node.constraints &= ~(NodeConstraints.Resize |
        //             NodeConstraints.Rotate |
        //             NodeConstraints.Drag);
        //         node.constraints |= NodeConstraints.ReadOnly;
        //        // node.constraints &= ~NodeConstraints.AspectRatio;
        //       // node.constraints |= NodeConstraints.Default & ~NodeConstraints.ReadOnly;
        //     }
        }
        diagramInstance.dataBind();
    }
}
export default Diagrams;