import React, { Component } from "react";

import DinningTable from "./Components/Table/table";
import Menu from "./Components/Item/src/menu";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import ItemsList from "./Components/Item/src/itemsList";
import { classnames } from "classnames";

class App extends Component {
  state = {
    isBusy: false,
    items: [],
    listOfTables: [
      {
        id: 0,
        number: 1,
        items: [
          { id: 0, name: "Sirloin", amount: 3, price: 20 },
          {
            id: 1,
            name: "Coke",
            amount: 3,
            price: 20,
          },
        ],
      },
      { id: 1, number: 2, items: [] },
      { id: 2, number: 3, items: [] },
      { id: 3, number: 4, items: [] },
      { id: 4, number: 5, items: [] },
      {
        id: 5,
        number: 6,
        items: [
          { id: 0, name: "Sirloin", amount: 1, price: 20 },
          {
            id: 1,
            name: "Coke",
            amount: 3,
            price: 20,
          },
        ],
      },
      { id: 6, number: 7, items: [] },
      {
        id: 7,
        number: 8,
        items: [
          { id: 0, name: "Sirloin", amount: 1, price: 20 },
          {
            id: 1,
            name: "Coke",
            amount: 3,
            price: 20,
          },
        ],
      },
    ],

    listItems: [
      {
        id: 0,
        name: "Sirloin",
        price: 20,
      },
      {
        id: 1,
        name: "Bolognese",
        price: 20,
      },
      {
        id: 2,
        name: "Coke",
        price: 20,
      },
      {
        id: 3,
        name: "Fanta",
        price: 20,
      },
    ],
    totalPrice: 0,
  };

  onClickChangeTableList = (tableNumber) => {
    const { listOfTables } = this.state;

    this.setState({ selectedTable: listOfTables[tableNumber].number });
    this.setState({ selectedTableID: listOfTables[tableNumber].id });
    let items = [...listOfTables[tableNumber].items];
    this.setState({ items });
  };

  // addItemTable = (item) => {

  // }

  render() {
    console.log(this.state.listOfTables[1].items);
    const {
      listOfTables,
      listItems,
      selectedTable,
      totalPrice,
      items,
      selectedTableID,
    } = this.state;

    return (
      <div className="App">
        <div id="tables">
          {listOfTables.map((table, i) => (
            <div className="margin" key={i}>
              <DinningTable
                isBusy={this.state.isBusy}
                key={i}
                onClickSelectTable={() => this.onClickChangeTableList(table.id)}
                number={table.number}
                items={table.items}
                totalPrice={table.totalPrice}
              />
            </div>
          ))}
        </div>

        <div className="container" id="container" style={{ float: "right" }}>
          <Row id="items">
            {listItems.map((item, i) => (
              <div className="margin" key={i}>
                <Col xs="4" sm="4" key={i}>
                  <Menu
                    key={i}
                    tableID={selectedTableID}
                    itemID={item.id}
                    name={item.name}
                    price={item.price}
                    tableNumber={selectedTable}
                    listOfTables={listOfTables}
                  />
                </Col>
              </div>
            ))}
          </Row>
        </div>

        <div className="container" id="container" style={{ float: "left" }}>
          <div className="container-bg">
            <ItemsList
              itemsInTable={items}
              tableNumber={selectedTable}
              totalPrice={totalPrice}
            ></ItemsList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
