import { IProfileData, ProfileComponent, ProfileSwitchDto } from ".";

export const ProfileSwitch = (): ProfileSwitchDto<any> => {
    return {
      farmer:  (data: IProfileData) => <><ProfileComponent 
      data={data.data} 
      farm={data.farm} 
      device={data.device} 
      stock={data.stock}
      onChange={data.onChange}
      checkPassword={data.checkPassword}
      updateProfileData={data.updateProfileData}
       /></>,
      marketplace: () => (
        <>
          
        </>
      ),
    };
  };