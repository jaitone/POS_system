import React, { Component } from "react";
import { Table } from "reactstrap";

class ItemsList extends Component {
  state = {
    show: false,
  };

  showTableNumber() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { itemsInTable, totalPrice } = this.props;
    let total;
    let list = itemsInTable.map((item) => {
      let totalPricePerItem;
      totalPricePerItem = item.amount * item.price;
      // totalPrice = totalPricePerItem + item.totalPricePerItem;

      return (
        <tbody>
          <tr key={item.id}>
            <td>
              <a target="_blank" href={item.cfa_url}>
                {item.name}
              </a>
            </td>
            <td>{item.amount}</td>
            <td>£{item.price}</td>
            <td>£{totalPricePerItem}</td>
            <td></td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        {this.state.show ? null : (
          <Table>
            <thead>
              <tr>
                <th>Table number: {this.props.tableNumber}</th>
              </tr>
            </thead>
          </Table>
        )}
        <Table striped responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Price per Item</th>
              <th>Total Price of Item</th>
              <th>Total Price</th>
            </tr>
          </thead>
          {list}
          <thead>
            <tr>
              <th>Total Price</th>
              <th></th>
              <th></th>
              <th></th>
              <th>0</th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}

export default ItemsList;
