import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Divider, Row, Col, Modal, Card } from 'antd'
import { fetchEmployees } from '../actions'
import styled from 'styled-components'

const {Meta} = Card

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '100%',
    overflowY: 'auto'
  },
  gridTile: {
    cursor: 'pointer',
    padding: '10px'
  },
  cardStyle: {
    display: 'inline-block',
    backgroundColor: 'red'
  },
  mediaStyle: {
    display: 'inline-block',
    height: '10vh'
  },
  dialogStyle: {
    display: 'table',
    textAlign: 'center',
    width: '100%',
    border: '15px dotted blue',
    backgroundColor: 'green'
  }
};

const CardContainer = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border: 10px dashed gray;
  padding: 1px;
`;

const EmployeesContainer = styled.div`
  width: 60%;
  margin: auto;
`

const EmployeeRow = styled(Row)`

`;

const EmployeeThumbnail = styled.img`
  height: 13vw;
  width: auto;
  cursor: pointer;
  padding-bottom: 20px;
`;

const ModalContainer = styled.div`
  text-align: center;
`;


class AboutUs extends Component {
  state = {
    open: false,
    selectedEmployee: {}
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  onTileTouch = (id) => {
    const clickedEmployee = this.props.employees.find((emp) => {
      return emp.id === id
    })

    this.setState({selectedEmployee: clickedEmployee})
    this.setState({open: true})
  }

  // TODO: I feel like there's a less messy way to do this...
  renderEmployees = (employees, perRow) => {

    let content = []
    let tempCols = []

    employees.forEach((emp, i) =>{
      if(((i+1) % perRow == 0) || (i == (employees.length-1))){
        tempCols.push(<Col span={8} key={emp.id}><EmployeeThumbnail onClick={(e) => this.onTileTouch(emp.id)} src={emp.thumbnail}/></Col>);
        content.push(
          <Row key={i} type="flex" justify="space-around" align="center">
            {tempCols}
          </Row>
        )
        tempCols = []
      }else{
        tempCols.push(
          <Col span={8} key={emp.id}>
            <EmployeeThumbnail onClick={(e) => this.onTileTouch(emp.id)} src={emp.thumbnail}/>
          </Col>
        )
      }
    })

    return (
      <div>
        {content}
      </div>
    )
  }

  renderEmployeeCard = (emp) => {
    return (
      // <Card style={styles.cardStyle}>
      //   <CardMedia mediaStye={styles.mediaStyle}>
      //     <img src={emp.photo} alt="" />
      //   </CardMedia>
      //   <CardTitle title={emp.name} subtitle={emp.title}/>
      //   <CardText>
      //     {emp.description}
      //   </CardText>
      // </Card>
      <div></div>
    )
  }

  componentDidMount() {
    this.props.employees.length ? null : this.props.fetchEmployees()
  }

  render() {
    return (
      <div>
        <Divider><h2>Employees</h2></Divider>

        <EmployeesContainer>
          {this.renderEmployees(this.props.employees, 3)}
        </EmployeesContainer>

        <ModalContainer>
          <Modal
            visible={this.state.open}
            onOk={() => this.handleClose()}
            onCancel={() => this.handleClose()}
            footer={null}
          >
            <Card
              // style={{ width: 240 }}
              bordered={false}
              cover={<img alt={this.state.selectedEmployee.name} src={this.state.selectedEmployee.photo} />}
            >
              <Meta
                title={this.state.selectedEmployee.name}
                description={this.state.selectedEmployee.title}
              />
              <p>{this.state.selectedEmployee.description}</p>
            </Card>
          </Modal>
        </ModalContainer>
      </div>
    );
  }
}

function mapStateToProps({employees}) {
  return {employees}
}

export default {
  component: connect(mapStateToProps, {fetchEmployees})(AboutUs),
  loadData: ({ dispatch }) => dispatch(fetchEmployees())
}
