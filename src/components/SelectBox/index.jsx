// import React from "react";
// import Select from "react-select";
// import PropTypes from "prop-types";


// const shapes = {
//   square: "rounded-[0px]",
// };

// const sizes = {
//   xs: "h-[22px] pr-6 text-lg",
// };

// const SelectBox = React.forwardRef(
//   (
//     {
//       children,
//       className = "",
//       options = [],
//       isSearchable = false,
//       isMulti = false,
//       indicator,
//       shape,

//       size = "xs",
//       ...restProps
//     },
//     ref
//   ) => {
//     const [menuPortalTarget, setMenuPortalTarget] = React.useState(null);

//     React.useEffect(() => {
//       setMenuPortalTarget(document.body);
//     }, []);

//     return (
//       <>
//         <Select
//           ref={ref}
//           options={options}
//           className={`${className} flex ${(shape && shapes[shape]) || ""} ${
//             (size && sizes[size]) || ""
//           }`}
//           isSearchable={isSearchable}
//           isMulti={isMulti}
//           components={{
//             IndicatorSeparator: () => null,
//             ...(indicator && { DropdownIndicator: () => indicator }),
//           }}
//           styles={{
//             container: (provided) => ({
//               ...provided,
//               zIndex: 0,
//             }),
//             control: (provided) => ({
//               ...provided,
//               backgroundColor: "transparent",
//               border: "0 !important",
//               boxShadow: "0 !important",
//               minHeight: "auto",
//               width: "100%",
//               "&:hover": {
//                 border: "0 !important",
//               },
//             }),
//             input: (provided) => ({
//               ...provided,
//               color: "inherit",
//             }),
//             option: (provided, state) => ({
//               ...provided,
//               backgroundColor: state.isSelected ? "#ffffff" : "transparent",
//               color: state.isSelected ? "#252020" : "inherit",
//               "&:hover": {
//                 backgroundColor: "#ffffff",
//                 color: "#252020",
//               },
//             }),
//             valueContainer: (provided) => ({
//               ...provided,
//               padding: 0,
//             }),
//             placeholder: (provided) => ({
//               ...provided,
//               margin: 0,
//             }),
//             menu: (provided) => ({
//               ...provided,
//               display: "block",
//             }),
//             menuPortal: (base) => ({ ...base, zIndex: 999999 }),
//           }}
//           menuPortalTarget={menuPortalTarget}
//           closeMenuOnScroll={(event) => {
//             return event.target.id === "scrollContainer";
//           }}
//           {...restProps}
//         />
//         {children}
//       </>
//     );
//   }
// );

// SelectBox.displayName = "SelectBox";

// SelectBox.propTypes = {
//   className: PropTypes.string,
//   options: PropTypes.array,
//   isSearchable: PropTypes.bool,
//   isMulti: PropTypes.bool,
//   onChange: PropTypes.func,
//   value: PropTypes.string,
//   indicator: PropTypes.node,
//   shape: PropTypes.oneOf(["square"]),
//   size: PropTypes.oneOf(["xs"]),
// };

// export { SelectBox };
import React from "react";
import Select, { components } from "react-select";
import PropTypes from "prop-types";
import { Img } from "../../components"; // Assuming Img is imported from your components

const shapes = {
  square: "rounded-[0px]",
};

const sizes = {
  xs: "h-[22px] pr-6 text-lg",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape,
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    // Custom Option component to show tick mark on the left and text aligned right
    const CustomOption = (props) => {
      return (
        <components.Option {...props}>
          <div className="flex items-center justify-between w-full">
            {props.isSelected && (
              <Img
                src="img_checkmark.svg"
                width={16}
                height={16}
                alt="checkmark"
                className="h-[16px] w-[16px] mr-2" // Tick mark on the left with margin
              />
            )}
            <span className="ml-auto">{props.data.label}</span> {/* Text aligned to the right */}
          </div>
        </components.Option>
      );
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(shape && shapes[shape]) || ""} ${
            (size && sizes[size]) || ""
          }`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
            Option: CustomOption, // Use the custom option component
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "#ffffff" : "transparent",
              color: state.isSelected ? "#252020" : "inherit",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#252020",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menu: (provided) => ({
              ...provided,
              display: "block",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  }
);

SelectBox.displayName = "SelectBox";

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs"]),
};

export { SelectBox };
