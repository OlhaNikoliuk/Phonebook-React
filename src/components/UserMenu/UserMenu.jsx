

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

 function UserMenu() {
  
  return (
    <div style={styles.container}>
      <img src='' alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, </span>
      <button type="button" >
        Выйти
      </button>
    </div>
  );
}

export default UserMenu;