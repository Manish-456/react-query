import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) =>
  axios.get(`http://localhost:3000/users/${email}`);
const fetchServerById = (serverId) =>
  axios.get(`http://localhost:3000/servers/${serverId}`);

export default function DependentQueriesPage({ email }) {
  const { data } = useQuery(["user", email], () => fetchUserByEmail(email));
  const serverId = data.data.serverId;

  const {data : serverData} = useQuery(["servers", serverId], () => fetchServerById(serverId), {
    enabled: !!serverId,
  });

  console.log(serverData)
  return <div className="lists">
    <h2>Dependent Queries</h2>
    <h3>{data.data.id}</h3>
    <div>
      <p>Channels</p>
      <ul>
        {serverData.data.channel.map((channel, id) => <li key={id} role="list">
            {channel}
        </li>)}
      </ul>
    </div>
  </div>;

}
