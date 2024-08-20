import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import ToggleIcon from "./../../assets/images/ic_toggle.svg";

// 옵션 기본값 설정, 초기 노출 값은 options 첫번째 값으로 설정
const Dropdown = ({
  options = [
    "누적 투자금액 높은순",
    "누적 투자금액 낮은순",
    "매출액 높은순",
    "매출액 낮은순",
    "고용 인원 많은순",
    "고용 인원 적은순",
  ],
  initialLabel = options[0],
  onOptionSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialLabel);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option); // 선택된 옵션을 부모 컴포넌트로 전달
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        <span className={styles.dropdownLabel}>{selectedOption}</span>
        <img src={ToggleIcon} alt="Toggle Icon" />
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option, index) => (
            <li
              key={index}
              className={`${styles.dropdownMenuItem} ${
                index === 0 ? styles.dropdownMenuItemFirst : ""
              } ${
                index === options.length - 1 ? styles.dropdownMenuItemLast : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
