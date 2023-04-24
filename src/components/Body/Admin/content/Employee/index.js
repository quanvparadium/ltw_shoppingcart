import { useEffect, useState } from 'react';


function Employee() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData([
            {
                id: "1",
                name: "Đặng Nguyên Phúc",
                sex: "Nam",
                birthday: "14 - 02 - 2002",
                phone: "0842702502",
                position: "Nhân viên",
                status: "Đang làm",
            },
            {
                id: "2",
                name: "Đặng Nguyên Phúc",
                sex: "Nam",
                birthday: "14 - 02 - 2002",
                phone: "0842702502",
                position: "Nhân viên",
                status: "Đang làm",
            },
            {
                id: "3",
                name: "Đặng Nguyên Phúc",
                sex: "Nam",
                birthday: "14 - 02 - 2002",
                phone: "0842702502",
                position: "Nhân viên",
                status: "Đang làm",
            },

        ])
    }, [])
    return (
        <>
            <div>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Tìm kiếm..." />
                </div>
                <select name="position" id="position-select">
                    <option value="">Mọi trạng thái</option>
                    <option value="Active">Đang hoạt động</option>
                    <option value="Offline">Không hoạt động</option>
                    <option value="Away">Tạm vắng</option>
                </select>
                <select name="status" id="status-select">
                    <option value="">Mọi chức vụ</option>
                    <option value="employee">Nhân viên</option>
                </select>
            </div>
            <div>

                <table>
                    <tr>
                        <th>STT</th>
                        <th>Tên nhân viên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>SĐT</th>
                        <th>Chức vụ</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={val.id}>
                                <td>{key + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.sex}</td>
                                <td>{val.birthday}</td>
                                <td>{val.phone}</td>
                                <td>{val.position}</td>
                                <td>{val.status}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Display</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </table>

                <button>Add</button>
            </div>
        </>
    )
}

export default Employee;