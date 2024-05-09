'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Tattooing",
    totalAmount: "$50.00",
  },
  {
    invoice: "Tattoo cover up",
    totalAmount: "$45.00",
  },
  {
    invoice: "Piercing",
    totalAmount: "$30.00",
  },
  {
    invoice: "Leaser Removal",
    totalAmount: "$75.00",
  },

];

export default function PriceTable() {
  return (
    <Table className="">
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className="text-gray-400 hover:bg-white hover:text-black  " key={invoice.invoice}>
            <TableCell className="font-medium text-left ps-0">{invoice.invoice}</TableCell>
            <TableCell className="text-right pe-0">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  );
}
