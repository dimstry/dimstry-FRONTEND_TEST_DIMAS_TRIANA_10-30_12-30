import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function App() {
  const [ userSelect, setUserSelect ] = useState("")
  const [ isShow, setIsShow ] = useState(false)
  const [ newData, setData ] = useState([])
  const [ newDataKab, setDataKab ] = useState([])

  const GetDatas = async () => {
    const datas = await fetch("http://dev.farizdotid.com/api/daerahindonesia/provinsi")
    const value = await datas.json()
    let result= value.provinsi.map(data => {
      return {
        label: data.nama,
        id: data.id
      }
    })
    setData(result);
  }
  useEffect(() => {
    GetDatas()
    selectProv()
    selectKec()
  }, [])
  
  const selectProv = async (id) => {
    console.log(id)
      const datas = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
      const value = await datas.json()
      console.log(value)
      let result = value.kota_kabupaten.map(data => {
        return {
          label: data.nama,
          id: data.id
        }
      })
      setDataKab(result);
  }

  const selectKec = async (id) => {
    console.log(id)
      const datas = await fetch(`http://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`)
      const value = await datas.json()
      console.log(value)
      let result = value.kecamatan.map(data => {
        return {
          label: data.nama,
          id: data.id
        }
      })
      setDataKab(result);
    }

  return (
    <div className="App">
      <h2>Heloo Word</h2>
      <div>
        <h6>Pilih provinsi</h6>
        <Select options={newData} onChange={(e) => selectProv(e.id) } />
      </div>

      <div>
        <h6>Pilih Kabupaten / Kota</h6>
        <Select options={newDataKab} onChange={(e) => selectKec(e.id) } />
      </div>

      <div>
        <h6>Pilih kecamatan</h6>
        <Select options={newDataKab} />
      </div>
      
    </div>
  );
}

export default App;
