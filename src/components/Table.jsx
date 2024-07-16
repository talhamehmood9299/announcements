/* eslint-disable react/prop-types */
import { tokenCounter } from "../data";

const TableHeader = () => (
  <thead className="bg-gray-50 sticky top-0 z-10">
    <tr>
      <th
        scope="col"
        colSpan={4}
        className="px-6 border py-3 text-center text-lg font-medium bg-[#2E4BCF] text-white uppercase tracking-wider"
      >
        Waiting List
      </th>
    </tr>
    <tr>
      <th
        scope="col"
        className="px-6 py-3 text-left text-md font-medium text-[#2E4BCF] uppercase tracking-wider border"
      >
        Room No
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-md font-medium text-[#2E4BCF] uppercase tracking-wider border"
      >
        Token No
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-md font-medium text-[#2E4BCF] uppercase tracking-wider border"
      >
        Room No
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-md font-medium text-[#2E4BCF] uppercase tracking-wider border"
      >
        Token No
      </th>
    </tr>
  </thead>
);

const TableRow = ({ room, token }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap border">
      <div className="text-sm text-gray-900">{room}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap border">
      <div className="text-sm text-gray-500">{token}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap border">
      <div className="text-sm text-gray-900">{room}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap border">
      <div className="text-sm text-gray-500">{token}</div>
    </td>
  </tr>
);

export default function Table() {
  return (
    <div className="overflow-hidden h-screen overflow-y-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {tokenCounter.map((counter, index) => (
            <TableRow key={index} room={counter.room} token={counter.token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
