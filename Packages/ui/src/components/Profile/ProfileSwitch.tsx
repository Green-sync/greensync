import { IProfileData, ProfileComponent, ProfileSwitchDto, ProfileTypes } from ".";

export const ProfileSwitch = (): ProfileSwitchDto<any> => {
    return {
      farmer:  (data: IProfileData) => <><ProfileComponent data={data.data} farm={data.farm} device={data.device} stock={data.stock}/></>,
      marketplace: () => (
        <>
          
        </>
      ),
    };
  };