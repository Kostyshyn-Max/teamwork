import ProfileCard from "./ProfileCard";

const Body = () => {
  return (
    <main style={styles.body}>
      <ProfileCard
        name="Maksym Kostyshyn"
        position="Software engineer"
        photoSrc="/avatar-default.png"
        photoAlt="Maksym Kostyshyn"
      />
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default Body;
