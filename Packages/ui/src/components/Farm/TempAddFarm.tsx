import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_FARM, IFarmInput } from './FarmDTO'

export const TempAddFarm = () => {
  const [farmData, setFarmData] = useState<IFarmInput>({
    name: '',
    type: '',
    location: '',
    size: 0,
    farmId: '',
    description: '',
    userId: null,
    dateCreated: null,
  });

  const [createFarm] = useMutation(ADD_FARM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createFarm({ variables: { farm: farmData } })
      .then((response) => {
        // Handle successful farm creation
        console.log(response.data.createFarm);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFarmData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={farmData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={farmData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={farmData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          name="size"
          value={farmData.size}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="farmId">Farm ID:</label>
        <input
          type="text"
          id="farmId"
          name="farmId"
          value={farmData.farmId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={farmData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={farmData.userId || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dateCreated">Date Created:</label>
        <input
          type="text"
          id="dateCreated"
          name="dateCreated"
          value={farmData.dateCreated || ''}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Farm</button>
    </form>
  );
};

export default TempAddFarm;
