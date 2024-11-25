"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const VisaSearch = () => {
  const data = [
    {
      No: 1,
      Full_name: "ZHAO HEMING",
      Birthday: "21/07/2022",
      Sex: "Nam",
      Current_nationality: "China",
      Original_nationality: "",
      Job: "Tự do",
      workplace: "SM 30",
      Passport_number: "EJ7492804",
      Type_of_Passport: "ordinary passport",
      Purpose: "du lịch",
      From_Date_to_enter: "10/01/2025",
      To_date: "09/02/2025",
      Duration: "Single entry",
      Place_to_get_visa: "Hanoi Airport",
      Creator: "Vaibhav",
      Created_date: "23-Nov",
      Created_time: "20:00",
      Speed: "4H",
      Handle_by: "Xia",
      Status: "Cancelled",
    },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    nationality: "",
    status: "",
    creator: "",
    dateFrom: "",
    dateTo: "",
  });

  const handleSearch = () => {
    const filtered = data.filter((item) => {
      return (
        (!searchFilters.name ||
          item.Full_name.toLowerCase().includes(
            searchFilters.name.toLowerCase()
          )) &&
        (!searchFilters.nationality ||
          item.Current_nationality === searchFilters.nationality) &&
        (!searchFilters.status || item.Status === searchFilters.status) &&
        (!searchFilters.creator || item.Creator === searchFilters.creator)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="w-full mx-auto px-4 mt-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* First Row */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <Input
              placeholder="Search by name"
              value={searchFilters.name}
              onChange={(e) =>
                setSearchFilters({ ...searchFilters, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Code</label>
            <Input
              placeholder="Search by name"
              value={searchFilters.name}
              onChange={(e) =>
                setSearchFilters({ ...searchFilters, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Nationality</label>
            <Select
              value={searchFilters.nationality}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, nationality: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select nationality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="China">China</SelectItem>
                <SelectItem value="Vietnam">Vietnam</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Handled By</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Handled By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mr Sami">Mr Sami</SelectItem>
                <SelectItem value="Mr Xiaa">Mr Xiaa</SelectItem>
                <SelectItem value="Mr Seba">Mr Seba</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Airport</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Airport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hanoi Airport">Hanoi Airport</SelectItem>
                <SelectItem value="Ho Chi Minh Airport">Ho Chi Minh Airport</SelectItem>
                <SelectItem value="Da Nang Airport">Da Nang Airport</SelectItem>
                <SelectItem value="Phuquoc Airport">Phuquoc Airport</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Embassy</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Embassy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vietnam embassy in Mumbai">Vietnam embassy in Mumbai</SelectItem>
                <SelectItem value="Vietnam embassy in Delhi">Vietnam embassy in Delhi</SelectItem>
                <SelectItem value="Vietnam embassy in Shanghai">Vietnam embassy in Shanghai</SelectItem>
                <SelectItem value="Vietnam embassy in Beijing">Vietnam embassy in Beijing</SelectItem>
                <SelectItem value="Vietnam embassy in Guangzhou">Vietnam embassy in Guangzhou</SelectItem>
                <SelectItem value="Vietnam embassy in Taiwan">Vietnam embassy in Taiwan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Speed</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Speed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4H">4H</SelectItem>
                <SelectItem value="8H">8H</SelectItem>
                <SelectItem value="1D">1D</SelectItem>
                <SelectItem value="2D">2D</SelectItem>
                <SelectItem value="3D">3D</SelectItem>
                <SelectItem value="NO">NO</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Duration</label>
            <Select
              value={searchFilters.status}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single Entry">Single Entry</SelectItem>
                <SelectItem value="Mutiple Entry">Multiple Entry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Creator</label>
            <Select
              value={searchFilters.creator}
              onValueChange={(value) =>
                setSearchFilters({ ...searchFilters, creator: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select creator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vaibhav">Vaibhav</SelectItem>
                <SelectItem value="Nikhil">Nikhil</SelectItem>
                <SelectItem value="Victor">Victor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Date From</label>
            <Input
              type="date"
              value={searchFilters.dateFrom}
              onChange={(e) =>
                setSearchFilters({
                  ...searchFilters,
                  dateFrom: e.target.value,
                })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Date To</label>
            <Input
              type="date"
              value={searchFilters.dateTo}
              onChange={(e) =>
                setSearchFilters({ ...searchFilters, dateTo: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <Button onClick={handleSearch}>Search</Button>
          <Button  className ="ml-4"onClick={handleSearch}>Download Excel</Button>
        </div>
       

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Nationality</TableHead>
              <TableHead>Passport Number</TableHead>
              <TableHead>Creator</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.No}>
                <TableCell>{item.No}</TableCell>
                <TableCell>{item.Full_name}</TableCell>
                <TableCell>{item.Current_nationality}</TableCell>
                <TableCell>{item.Passport_number}</TableCell>
                <TableCell>{item.Creator}</TableCell>
                <TableCell>{item.Created_date}</TableCell>
                <TableCell>{item.Status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VisaSearch;
