import React from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import UserList from "./UserList";
const Body = () => {
  return (
    <div
      className="overflow-x-auto mx-auto my-4"
      style={{
        width: "1200px",
      }}
    >
      <Table className="rounded-box mx-auto">
        <Table.Head>
          <Checkbox />
          <span>Name</span>
          <span>Address</span>
          <span>Phone</span>
          <span>RegDate</span>
          <span>Feature</span>
          <span>&nbsp;</span>
          <span>Edit</span>
          <span>Delete</span>
          <span>&nbsp;</span>
          <span>Read More</span>
          <span />
        </Table.Head>

        <Table.Body>
          <UserList />
          {/* <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
              />
              <div>
                <div className="font-bold">Hart Hagerty</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
            <div>
              Zemlak, Daniel and Leannon
              <br />
              <Badge color="ghost" size="sm">
                Desktop Support Technician
              </Badge>
            </div>
            <div>Purple</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
              />
              <div>
                <div className="font-bold">Brice Swyre</div>
                <div className="text-sm opacity-50">China</div>
              </div>
            </div>
            <div>
              Carrol Group
              <br />
              <Badge color="ghost" size="sm">
                Tax Accountant
              </Badge>
            </div>
            <div>Red</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
              />
              <div>
                <div className="font-bold">Marjy Ferencz</div>
                <div className="text-sm opacity-50">Russia</div>
              </div>
            </div>
            <div>
              Rowe-Schoen
              <br />
              <Badge color="ghost" size="sm">
                Office Assistant I
              </Badge>
            </div>
            <div>Crimson</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row>

          <Table.Row>
            <Checkbox />
            <div className="flex items-center space-x-3 truncate">
              <Mask
                variant="squircle"
                src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
              />
              <div>
                <div className="font-bold">Yancy Tear</div>
                <div className="text-sm opacity-50">Brazil</div>
              </div>
            </div>
            <div>
              Wyman-Ledner
              <br />
              <Badge color="ghost" size="sm">
                Community Outreach Specialist
              </Badge>
            </div>
            <div>Indigo</div>
            <Button color="ghost" size="xs">
              details
            </Button>
          </Table.Row> */}
        </Table.Body>

        <Table.Footer></Table.Footer>
      </Table>
    </div>
  );
};

export default Body;
