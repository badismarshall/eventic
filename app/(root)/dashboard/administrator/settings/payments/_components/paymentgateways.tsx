import { promises as fs } from "fs"
import { z } from "zod"
import path from "path"
import { DataTable } from "@/components/table/data-table"
import { paymentGatewaysSchema } from "./paymentgateway-data-table-schema"
import { columns } from "./paymentgatewayTableColumns"
import { DataTableToolbar } from "./paymentgateway-data-table-toolbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Événements",
  description: "Une liste de tous les événements.",
}



async function getPaymentGateways() {

  const data = await fs.readFile(
    path.join(process.cwd(), "/constants/dashboard/administrator/paymentgateways/gateways-data.json")
  )

  const paymentgetway = JSON.parse(data.toString())

  return z.array(paymentGatewaysSchema).parse(paymentgetway)
}



export default async function PaymentGateways()  {

    const paymentgateways = await getPaymentGateways()

  return (
      <DataTable
        data={paymentgateways}
        columns={columns}
        DataTableToolbar={DataTableToolbar}
      />
  )
}

