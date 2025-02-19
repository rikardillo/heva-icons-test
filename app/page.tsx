import { MdMenu } from "react-icons/md";

// Icons are imported from the react-icons library. And then used as Regular React components.

import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

const IconCard = ({ children }: any) => {
  return (
    <div className="flex max-w-[320px] flex-col items-center gap-4 rounded-lg border-2 border-slate-200 p-4">
      {children}
    </div>
  );
};

const IconFlexContainer = ({ children }: any) => {
  return <div className="flex items-center gap-4">{children}</div>;
};

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-black">Icon Test</h1>
      <div className="flex items-start justify-center gap-4">
        <IconCard>
          <IconFlexContainer>
            <MdMenu
              className="text-[40px] text-red-500"
              style={{ strokeWidth: 2 }}
            />
          </IconFlexContainer>
          <p>
            Some icons have unwanted borders like this one from Material Design.
          </p>
        </IconCard>

        <IconCard>
          <IconFlexContainer>
            <IoIosCloseCircleOutline
              className="text-blue-500"
              style={{ strokeWidth: 40 }}
            />
            <IoIosCloseCircleOutline
              className="text-[40px] text-blue-500"
              style={{ strokeWidth: 40 }}
            />
          </IconFlexContainer>
          <p>Outline icons are ideal.</p>
        </IconCard>

        <IconCard>
          <IconFlexContainer>
            <IoIosNotificationsOutline className="cursor-pointer text-[40px] transition-all duration-300 hover:scale-125 hover:text-blue-500" />
            <IoIosNotificationsOutline
              className="cursor-pointer text-[40px] transition-all duration-300 hover:scale-125 hover:text-blue-500"
              style={{ strokeWidth: 40 }}
            />
          </IconFlexContainer>
          <p>
            Most CSS styles can be modified either through the <b>className</b>{" "}
            or <b>style</b> props.
          </p>
          <p>
            Stroke width can be through <strong>style</strong> props.
          </p>
          <p>Icon size can be changed with text-[size]</p>
        </IconCard>
      </div>
    </div>
  );
}
