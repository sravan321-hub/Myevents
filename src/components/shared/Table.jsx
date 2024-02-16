import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  
  CardFooter,

  IconButton,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["Agent Name", "Version", "Cluster Provider", "Status", "Location","k8sversion", "Last Communication"];
 
const TABLE_ROWS = [
  {
    
    name: "Preprod Environment",
    version: "1.0.0",
    cluster:  "AWS",
    status:"Active",
    location: "us-west-1",
    k8sversion: "124",
    last: "5min ago",
  },
  {
    
    name: "Prod Environment",
    version: "1.0.0",
    cluster:  "AWS",
    status: "InActive" ,
    location: "us-east-1",
    k8sversion: "124",
    last: "5min ago",
  },
  {
  
    name: "Dev Environment",
    version: "1.0.0",
    cluster:  "AWS",
    status: "Active",
    location: "us-north-1",
    k8sversion: "124",
    last: "5min ago",
  },
  {

    name: "PreDev Environment",
    version: "1.0.0",
    cluster:  "AWS",
    status:"InActive",
    location: "us-south-1",
    k8sversion: "124",
    last: "5min ago",
  },
  {
    
    name: "Environment",
    version: "1.0.0",
    cluster:  "AWS",
    status:"Active",
    location: "us-center-1",
    k8sversion: "124",
    last: "5min ago",
  },
];
 
export function TransactionsTable() {
  return (
            <Card className="h-90 w-full">
               <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          
               </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                 <table className="w-full min-w-max table-auto text-left">
                   <thead>
                    <tr>
                   {TABLE_HEAD.map((head) => (
                       <th
                         key={head}
                       className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                    <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                   >
                    {head}
                     </Typography>
                     </th>
                   ))}
                  </tr>
             </thead>
     <tbody>
        {TABLE_ROWS.map(
          (
            {
                  
                  name,
                  version,
                  cluster,
                  status,
                  location,
                  k8sversion,
                  last,
            },
                index,
               ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                       
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {version}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {cluster}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                  
                      <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {location}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {k8sversion}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {last}
                      </Typography>
                    </td>
                  
                 
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center 
      justify-between border-t
      border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center items-center gap-2">
          <IconButton variant="outlined"  size="sm"
          className="flex items-center text-center justify-between "
          >
            1
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            2
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            3
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            ...
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            8
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            9
          </IconButton>
          <IconButton variant="text" size="sm"
          className="flex items-center justify-between ">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
