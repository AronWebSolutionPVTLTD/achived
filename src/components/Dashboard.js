import React, { Component } from 'react';
import Layout from './../Layout/Layout';
// import Footer from './../Layout/Footer';
import roadmaps from './../document';
//import Diagrams from './Diagram';
import { DiagramComponent, NodeConstraints, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let node;
const ulstyle = {
    display: 'inline-flex',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
};
const ul_li = {
    padding: '30px',
    border: '1px solid',
};
const milstone_spn = {
  padding: '10px'
}
class Dashboard extends Component {
constructor(props){
  super(props);
  this.state={
  email: '',
  error:'',
  elements: [],
  engine: '',
  selected_id: '1',
  one_element: [],
  milestone:[],
  milestone_count: '0',
  achived_perc: '0',
  sdlc: [],
  connections: [],
  };
  this.handleClick = this.handleClick.bind(this);
 }
 componentDidMount() {
  this.setState({elements :roadmaps.roadmaps});
  this.roadmap(this.state.selected_id, roadmaps.roadmaps);
  var locked= "lock";
  this.changed(locked);
 }

 componentDidUpdate(){

 }

 roadmap(id, elements) {
 // const { elements } = this.state;
 console.log(id);
  for(var i=0; i<=elements.length; i++){
      if(elements[i].id === id)
      {
        var occurrences = { };
        var arr = elements[i].milestones;
        for (var k = 0, j = arr.length; k < j; k++) {
           occurrences[arr[k].state] = (occurrences[arr[k].state] || 0) + 1;
        }
        var percent='';
        if(occurrences.Achieved === 0 || occurrences.Achieved === undefined)
        {
          percent = 0;
        }else{
           percent = Math.round(occurrences.Achieved/arr.length*100);
        }
        let sdlc= elements[i].milestones;
        console.log(sdlc);
        sdlc[0].offsetX = 300;
        sdlc[0].offsetY = 300;
        let value =500;
        for (let i = 1; i < sdlc.length; i++) {
            sdlc[i].offsetX = value;
            sdlc[i].offsetY = 300;
            value +=150; 
        }
        //Initializes the connector for the diagram
        let connections = [];
        for (let i = 0; i < sdlc.length -1; i++) {
          if(i=== 5){
            //connections.push({ sourceID: sdlc[i].id, targetID: sdlc[i].id });
          }else{
           connections.push({ sourceID: sdlc[i].id, targetID: sdlc[(i % 5)+1].id }); 
          }
        }

        //var milestone= <Diagrams milestone={elements[i].milestones}  count={elements[i].milestones.length} />;
        this.setState({connections , sdlc,one_element :elements[i], milestone_count : elements[i].milestones.length, achived_perc: percent});
         break;
      }
    }
 }
handleClick(e, id) {
   // e.preventDefault();
    this.setState({selected_id: id});
    console.log(this.state.elements);
    this.roadmap(id, this.state.elements);
}
changed(args) {
   // let element = document.getElementById("aspectRatio");
    for (let i = 0; i < diagramInstance.nodes.length; i++) {
        node = diagramInstance.nodes[i];

         if (args === "lock") {
        //     if (args.checked) {
        //         node.constraints &= ~(NodeConstraints.Resize |
        //             NodeConstraints.Rotate |
        //             NodeConstraints.Drag);
        //         node.constraints |= NodeConstraints.ReadOnly;
        //     }
        //     else {
              // node.constraints &= ~(NodeConstraints.Resize |
              //       NodeConstraints.Rotate |
              //       NodeConstraints.Drag);
              //   node.constraints |= NodeConstraints.ReadOnly;
                node.constraints |= NodeConstraints.Default & ~NodeConstraints.ReadOnly;
          //  }
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
 render() {
  const { sdlc, connections, elements, one_element, milestone_count, achived_perc} = this.state;
    return (
      <div>
        <Layout />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
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
            <div className="col-md-2">
            <h5>Details :</h5>
              <ul>
              <li><span>Project Name :</span> <span>{one_element.projectName}</span></li>
              <li><span>Token Name :</span> <span>{one_element.tokenName}</span></li>
              <li><span>Status :</span> <span>Active</span></li>
              </ul>
              <h5>Milestones :</h5>
              <ul>
              <li><span>Achived :</span> <span>{achived_perc} %</span></li>
              <li><span>Changed {milestone_count} times</span></li>
              </ul>
              <h5>Funds :</h5>
              <ul>
              <li><span>Target :</span> <span>{one_element.investmentLimit}</span></li>
              <li><span>Raised so for: </span><span>{one_element.invesmentFunds}</span></li>
              <li><span>Status :</span> <span>Active</span></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <ul style={ulstyle}>
              {elements.map((roadmap, index) => {
                return <li key={index} style={ul_li} onClick={(event) => this.handleClick(event, roadmap.id)}>
                <p>{roadmap.projectName}</p>
                <p>Milestones</p>
                {roadmap.milestones.map((milestone, ind) => {
                 return <span key={milestone.id} style={milstone_spn}>{milestone.id}</span>
                })}
                </li>
              })}
            </ul>
          </div>
        </div>
   </div>
   );
}
}

export default Dashboard;
