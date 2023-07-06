"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRecoilValue } from "recoil";
import { CartInfo } from "@/RecoilState";
import { Menu, MenuBtn, Badge } from "@/styled-components/styled-components";

const menuList = [
  { name: "상품 목록", path: "/product" },
  // { name: "장바구니", path: "/cart" },
];

const Navbar = () => {
  const router = useRouter();
  const cartList = useRecoilValue(CartInfo);
  return (
    <Menu>
      <img
        src={"/logo1.png"}
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      />
      {menuList.map((list) => (
        <MenuBtn key={list.name} onClick={() => router.push(list.path)}>
          {list.name}
        </MenuBtn>
      ))}
      <span style={{ position: "relative", cursor: "pointer" }}>
        <AiOutlineShoppingCart size={30} onClick={() => router.push("/cart")} />
        <Badge>{cartList.length}</Badge>
      </span>
    </Menu>
  );
};
export default Navbar;
