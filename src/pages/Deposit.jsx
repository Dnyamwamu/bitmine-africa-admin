import React, { useState } from "react"
import { DialogComponent } from "@syncfusion/ej2-react-popups"
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns"
import { Button } from "../components"
import { dropdownData } from "../data/dummy"
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids"
import { ordersData, contextMenuItems, depositGrid } from "../data/dummy"
import { Header } from "../components"

import { useStateContext } from "../contexts/ContextProvider"
import nowPayments from "../data/NowPayments.jfif"

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
)

const Deposit = () => {
  const [visibility, setDialogVisibility] = useState(false)

  const onOverlayClick = () => {
    setDialogVisibility(true)
  }
  const dialogClose = () => {
    setDialogVisibility(false)
  }
  const handleClick = () => {
    setDialogVisibility(true)
  }

  const header = () => {
    return (
      <div>
        <img src={nowPayments} />
        <div
          title="NOWPayments"
          className="e-icon-settings dlg-template e-primary"
        >
          <a href="https://account.nowpayments.io/sign-in">
            Sign in to your Account
          </a>
        </div>
      </div>
    )
  }
  const footerTemplate = () => {
    return (
      <div>
        <p>
          Cryptocurrency payment gateway which allows businesses to accept BTC,
          ETH, XRP and other coins on their websites.
        </p>

        <a href="https://account.nowpayments.io/sign-in" className="mt-24">
          <button
            id="sendButton"
            className="e-control e-btn e-primary"
            data-ripple="true"
          >
            Sign In
          </button>
        </a>
      </div>
    )
  }

  const { currentColor, currentMode } = useStateContext()
  const editing = { allowDeleting: true, allowEditing: true }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex justify-between">
        <Header category="Transaction Summary" title="Deposits" />
        <div className="opacity-0.9 hover:drop-shadow-xl">
          {/* <div onClick={handleClick}>
            <Button
              color="white"
              bgColor="#00b0ff"
              text="Deposit +"
              borderRadius="10px"
            />
          </div> */}
        </div>
      </div>
      <DialogComponent
        width="450px"
        isModal={true}
        visible={visibility}
        close={dialogClose}
        overlayClick={onOverlayClick}
        // header={header}
        // footerTemplate={footerTemplate}
        showCloseIcon={true}
        closeOnEscape={true}
      >
        To be updated....
      </DialogComponent>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        pageSettings={{ pageSize: 5 }}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {depositGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Deposit
