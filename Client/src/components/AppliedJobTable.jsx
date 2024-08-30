import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Date</TableHead>
            <TableHead className="text-left">Job Role</TableHead>
            <TableHead className="text-left">Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow key={index}>
              <TableCell>17-07-2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right">
                <Badge variant="success">Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
