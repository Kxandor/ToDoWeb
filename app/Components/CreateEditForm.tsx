import React, { Dispatch } from "react";

interface CreateEditFormProps {
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  underLabel: string;
  setUnderLabel: React.Dispatch<React.SetStateAction<string>>;
  tag: string;
  setTag: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: any;
  name: string;
}

const CreateEditForm = ({
  handleSubmit,
  label,
  setLabel,
  underLabel,
  setUnderLabel,
  tag,
  setTag,
  location,
  setLocation,
  priority,
  setPriority,
  name,
}: CreateEditFormProps) => {
  return (
    <div className="pl-12 max-md:w-120 pt-12">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="pt-8 text-3xl font-bold text-blue-500">
            <p>{name} task</p>
          </div>
          <div>
            <div className="pt-8 md:flex gap-12">
              <div>
                <div className="flex mb-2">
                  <div className="pr-14">Task name</div>
                  <div>
                    <input
                      className="rounded-md shadow-md dark:text-black focus:border-blue-500"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="pr-[18px]">Task description</div>
                  <input
                    className="rounded-md shadow-md dark:text-black"
                    value={underLabel}
                    onChange={(e) => setUnderLabel(e.target.value)}
                    required
                  />
                </div>
                <div className="flex mb-2">
                  <div className="pr-[80px]">Priority</div>
                  <select
                    className="rounded-md shadow-md w-full dark:text-black"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  >
                    <option value=""></option>
                    <option value="true">High</option>
                    <option value="false">Low</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex mb-2 ">
                  <div className="md:pr-14 pr-[107px] ">Tag</div>
                  <select
                    className="rounded-md shadow-md w-full dark:text-black"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                  >
                    <option value=""></option>
                    <option value="Work">Work</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                    <option value="Free Time">Free Time</option>
                  </select>
                </div>
                <div className="flex mb-2">
                  <div className="md:pr-[21px] pr-[70px] ">Location</div>
                  <input
                    className="rounded-md shadow-md dark:text-black"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-center w-full md:w-full bg-blue-500 hover:shadow-xl text-white hover:cursor-pointer rounded-xl">
                  <div className="w-full">
                    <input type="submit" className="w-full"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEditForm;
