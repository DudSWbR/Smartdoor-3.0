import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Loading, Table } from "~/components/elements";
import { Card, CardHeader, CardTitle, CardButton, TableCell } from "./styles";

export default function CardDashList({ title, heads, data, link, loading }) {
  return (
    <Card>
      <CardHeader container justify="space-between">
        <Grid item>
          <CardTitle>
            {title} <span>(5 últimos)</span>
          </CardTitle>
        </Grid>
        <Grid item>
          <Link to={link}>
            <CardButton size="small"> Ver todos</CardButton>
          </Link>
        </Grid>
      </CardHeader>
      {loading ? (
        <Loading />
      ) : (
        <Table th={heads}>
          {data &&
            data.map((i) => {
              return (
                <tr key={i.id}>
                  <TableCell>{i.cell1 && i.cell1}</TableCell>
                  <TableCell>{i.cell2 && i.cell2}</TableCell>
                  <TableCell>{i.cell3 && i.cell3}</TableCell>
                </tr>
              );
            })}
        </Table>
      )}
    </Card>
  );
}
