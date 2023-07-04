"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { AiOutlineShoppingCart } from "react-icons/ai";

const menuList = [
  { name: "상품 목록", path: "/product" },
  { name: "장바구니", path: "/cart" },
];

const Menu = styled.div`
  background-color: #f9f9ee;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 50px;
  svg {
    margin-left: 50px;
  }
`;

const MenuBtn = styled.span`
  padding: 20px 50px;
  cursor: pointer;
`;

const Badge = styled.span`
  background-color: red;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  font-weight: 600;
  position: absolute;
  top: -5px;
  right: -25px;
`;

const Navbar = () => {
  const router = useRouter();
  return (
    <Menu>
      <Image
        src={"/logo.png"}
        width={150}
        height={50}
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      />
      {menuList.map((list) => (
        <MenuBtn key={list.name} onClick={() => router.push(list.path)}>
          {list.name}
        </MenuBtn>
      ))}
      <span style={{ position: "relative" }}>
        <AiOutlineShoppingCart size={30} />
        <Badge>10</Badge>
      </span>
    </Menu>
  );
};
export default Navbar;
