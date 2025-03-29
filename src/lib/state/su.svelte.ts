let admin: boolean = $state(false);
export const su_control = {
    su() {
        admin = true
    },
    is_su() {
        return admin
    }
}
