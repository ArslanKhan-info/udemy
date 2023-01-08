import { addServices } from 'Action'
import WithAuth from 'hoc/forAuth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ServicesCreate = ({auth}) => {
    const [formData,setFormData]=useState(
        {category: 'mathematics',
        title: '',
        description: '',
        image: '',
        price: null
    })
    const navigate =useNavigate()




    const handleChange = (e)=>{
        const {name,value}= e.target
        setFormData(state=>({...state,[name]:value}))
    }
    const handleSubmit = ()=>{
        addServices(formData,auth.user.uid)
            .then(res=>navigate('/'))
            .catch(err=>toast.error(err))
    }

  return (
    <div className="create-page">
    <div className="container">
      <div className="form-container">
        <h1 className="title">Create Service</h1>
        <form>
          <div className="field">
            <label className="label">Category</label>
            <div className="control">
              <div className="select">
                <select name="category" onChange={handleChange}>
                  <option value="mathematics">Mathematics</option>
                  <option value="programming">Programming</option>
                  <option value="painting">Painting</option>
                  <option value="singing">Singing</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                onChange={handleChange}
                name="title"
                className="input"
                type="text"
                placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                onChange={handleChange}
                name="description"
                className="textarea"
                placeholder="Textarea"></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
              <input
                onChange={handleChange}
                name="image"
                className="input"
                type="text"
                placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Price per Hour</label>
            <div className="control">
              <input
                onChange={handleChange}
                name="price"
                className="input"
                type="number"
                placeholder="Text input" />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={handleSubmit}
                type="button" 
                className="button is-link">Create</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default WithAuth(ServicesCreate)